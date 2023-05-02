using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;
using System.IO;
using SimpleJSON;
using static Question;
using UnityEngine.SceneManagement;
using TMPro;


public class TeacherQuestionManager : MonoBehaviour
{
    public GameObject teacherObject;
    public GameObject userObject;
    public string studentID;
    public string teacherID;
    public string teacherName;
    public string JSONurl = "";
    public string JSONIDurl = "";
    public string ID = "";
    public string qID = "";
    public string qTitle = "";
    public string qSection = "";
    public string qAnswerKind = "";
    public TextMeshProUGUI pregunta;
    public TextMeshProUGUI profesorNombre;
    public Question[] questions = new Question[20];
    public int totalQuestions;
    public int totalAnswers;
    public int currentIndex;

    public Image backButtonI;
    public Image nextButtonI;

    public Sprite bButtonOn;
    public Sprite bButtonOff;

    public Sprite nButtonOn;
    public Sprite nButtonOff;
    public Sprite eButton;

    public Button backButtonB;
    public Button nextButtonB;

    IEnumerator Start()
    {
        teacherObject = GameObject.Find("TeacherObject");

        studentID = userObject.GetComponent<User>().ID;
        teacherID = teacherObject.GetComponent<TeacherObj>().ID;
        teacherName = teacherObject.GetComponent<TeacherObj>().name;

        pregunta = GameObject.Find("Question").GetComponent<TextMeshProUGUI>();
        profesorNombre = GameObject.Find("Profesor").GetComponent<TextMeshProUGUI>();

        UnityWebRequest web = UnityWebRequest.Get(JSONIDurl);
        web.useHttpContinue = false;

        yield return web.SendWebRequest();

        if (web.isNetworkError || web.isHttpError)
        {
            SceneManager.LoadScene("Error");
            Debug.Log("Error API: " + web.error);
        }
        else
        {
            Debug.Log(web.downloadHandler.text);
            JSONNode jsonReceived = SimpleJSON.JSON.Parse(web.downloadHandler.text);
            Debug.Log(jsonReceived["id"].ToString());
            ID = jsonReceived["id"].ToString();
        }

        JSONurl = "http://localhost:8080/api/surveys/" + ID + "?section=TEACHER&isActive=true";

        web = UnityWebRequest.Get(JSONurl);
        web.useHttpContinue = false;

        yield return web.SendWebRequest();

        if (web.isNetworkError || web.isHttpError)
        {
            SceneManager.LoadScene("Error");
            Debug.Log("Error API: " + web.error);
        }
        else
        {
            Debug.Log(web.downloadHandler.text);
            JSONNode questionData = SimpleJSON.JSON.Parse(web.downloadHandler.text);
            totalQuestions = questionData["questions"].Count;

            for (int c = 0; c < totalQuestions; c++)
            {

                Debug.Log("ID: " + questionData["questions"][c]["id"].ToString());
                qID = questionData["questions"][c]["id"].ToString();

                Debug.Log("Title: " + questionData["questions"][c]["title"].ToString());
                qTitle = questionData["questions"][c]["title"].ToString();

                Debug.Log("Section: " + questionData["questions"][c]["section"].ToString());
                qSection = questionData["questions"][c]["section"].ToString();

                Debug.Log("Answer Kind: " + questionData["questions"][c]["answerKind"].ToString());
                qAnswerKind = questionData["questions"][c]["answerKind"].ToString();

                Question questionReceived = new Question(qID, qTitle, qSection, qAnswerKind, teacherName);
                Debug.Log(questionReceived.toString());

                questions[c] = questionReceived;
            }

            // Debug.Log(questions);
            // Debug.Log(questions[0].toString());
            // currentIndex = 0;

            // backButtonI.sprite = bButtonOff;
            // nextButtonI.sprite = nButtonOn;
            // nextButtonB.onClick.AddListener(loadNextQuestion);

            // updateQuestion(currentIndex);
            JSONurl = "http://localhost:8080/api/answers/" + studentID;

            web = UnityWebRequest.Get(JSONurl);
            web.useHttpContinue = false;

            yield return web.SendWebRequest();

            int scoreNum;

            if (web.isNetworkError || web.isHttpError)
            {
                SceneManager.LoadScene("Error");
                Debug.Log("Error API: " + web.error);
            }
            else
            {
                Debug.Log(web.downloadHandler.text);
                JSONNode answersData = SimpleJSON.JSON.Parse(web.downloadHandler.text);
                totalAnswers = answersData.Count;

                for(int c = 0; c<totalAnswers; c++){
                    for (int i = 0; i<totalQuestions; i++){
                        if (answersData[c]["questionId"] == questions[i] && answersData[c]["teacherRegistration"] == teacherID) {
                            if (int.TryParse(answersData[c]["content"], out scoreNum) || answersData[c]["content"] == null) {        
                                questions[i].score = answersData[c]["content"];
                            }
                            else {
                                questions[i].comment = answersData[c]["content"];
                            }
                        }
                        Debug.Log(questions[i].toString());
                    }
                }

                currentIndex = 0;

                backButtonI.sprite = bButtonOff;
                nextButtonI.sprite = nButtonOn;
                nextButtonB.onClick.AddListener(loadNextQuestion);

                updateQuestion(currentIndex);
            }
        }
    }

    void Update()
    {
        if (currentIndex == 0)
        {
            backButtonI.sprite = bButtonOff;
            nextButtonI.sprite = nButtonOn;
        }
        else if (currentIndex < totalQuestions - 1)
        {
            backButtonI.sprite = bButtonOn;
            nextButtonI.sprite = nButtonOn;
        }
        else
        {
            nextButtonI.sprite = eButton;
            nextButtonI.sprite = eButton;
        }
    }

    void updateQuestion(int qIndex)
    {
        pregunta.text = questions[qIndex].title;
        profesorNombre.text = teacherName; 
        Debug.Log(questions[qIndex].score);
    }

    public void loadNextQuestion()
    {
        if (currentIndex < totalQuestions - 1)
        {
            // Aqui va el send answer a la base de datos
            currentIndex++;
            updateQuestion(currentIndex);
            // Función para la animación
        }
        else
        {
            toTeacherMenu();
        }
    }

    public void toTeacherMenu()
    {
        SceneManager.LoadScene("teacher_menu");
    }

    public void loadPrevQuestion()
    {
        if (currentIndex > 0)
        {
            currentIndex--;
            updateQuestion(currentIndex);
        }
    }

    public void score0()
    { questions[currentIndex].score = 0; Debug.Log(questions[currentIndex].score); }
    public void score1()
    { questions[currentIndex].score = 1; Debug.Log(questions[currentIndex].score); }
    public void score2()
    { questions[currentIndex].score = 2; Debug.Log(questions[currentIndex].score); }
    public void score3()
    { questions[currentIndex].score = 3; Debug.Log(questions[currentIndex].score); }
    public void score4()
    { questions[currentIndex].score = 4; Debug.Log(questions[currentIndex].score); }
    public void score5()
    { questions[currentIndex].score = 5; Debug.Log(questions[currentIndex].score); }
    public void score6()
    { questions[currentIndex].score = 6; Debug.Log(questions[currentIndex].score); }
    public void score7()
    { questions[currentIndex].score = 7; Debug.Log(questions[currentIndex].score); }
    public void score8()
    { questions[currentIndex].score = 8; Debug.Log(questions[currentIndex].score); }
    public void score9()
    { questions[currentIndex].score = 9; Debug.Log(questions[currentIndex].score); }
    public void score10()
    { questions[currentIndex].score = 10; Debug.Log(questions[currentIndex].score); }
    public void scoreNull()
    { questions[currentIndex].score = null; Debug.Log(questions[currentIndex].score); }

}

