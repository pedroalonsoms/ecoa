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
    public int qSurveyQuestionID;
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

    // Score Buttons
    public Button buttonScore0;
    public Button buttonScore1;
    public Button buttonScore2;
    public Button buttonScore3;
    public Button buttonScore4;
    public Button buttonScore5;
    public Button buttonScore6;
    public Button buttonScore7;
    public Button buttonScore8;
    public Button buttonScore9;
    public Button buttonScore10;
    public Button buttonScoreNA;
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

                Debug.Log("QSurvey ID: " + questionData["questions"][c]["surveyQuestionId"].ToString());
                qSurveyQuestionID = questionData["questions"][c]["surveyQuestionId"];

                Debug.Log("Title: " + questionData["questions"][c]["title"].ToString());
                qTitle = questionData["questions"][c]["title"].ToString();

                Debug.Log("Section: " + questionData["questions"][c]["section"].ToString());
                qSection = questionData["questions"][c]["section"].ToString();

                Debug.Log("Answer Kind: " + questionData["questions"][c]["answerKind"].ToString());
                qAnswerKind = questionData["questions"][c]["answerKind"].ToString();

                if (qSection == "\"COURSE\"")
                {
                    qSection = "CRN";
                }
                else
                {
                    qSection = "TEACHER_REGISTRATION";
                }

                Question questionReceived = new Question(qID, qSurveyQuestionID, qTitle, qSection, qAnswerKind, teacherName);
                Debug.Log(questionReceived.toString());
                questions[c] = questionReceived;
            }
            // Debug.Log(questions);
            // Debug.Log(questions[0].toString());
        }

        for (int f = 0; f < totalQuestions; f++)
        {
            JSONurl = "http://localhost:8080/api/answers/" + studentID + "/surveyQuestions/" + questions[f].surveyQuestionId.ToString();

            web = UnityWebRequest.Get(JSONurl);
            web.useHttpContinue = false;

            yield return web.SendWebRequest();

            if (web.isNetworkError || web.isHttpError)
            {
                // SceneManager.LoadScene("Error");
                Debug.Log("Error API: " + web.error);
            }
            else
            {
                Debug.Log(web.downloadHandler.text);
                JSONNode answerData = SimpleJSON.JSON.Parse(web.downloadHandler.text);
                Debug.Log(questions[f].answerKind);
                Debug.Log(answerData["content"]);
                if (questions[f].answerKind == "\"NUMERIC\"")
                {
                    questions[f].score = int.Parse(answerData["content"]);
                    Debug.Log(questions[f].ToString());
                }
                else
                {
                    questions[f].comment = answerData["content"];
                }
                Debug.Log(questions[f].toString());
            }
        }

        currentIndex = 0;

        backButtonI.sprite = bButtonOff;
        nextButtonI.sprite = nButtonOn;
        nextButtonB.onClick.AddListener(loadNextQuestion);

        updateQuestion(currentIndex);
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

        // TODO. Switch para resaltar el boton dependiendo del score asignado
        switch (questions[qIndex].score)
        {
            case 0:
                buttonScore0.Select();
                break;
            case 1:
                buttonScore1.Select();
                break;
            case 2:
                buttonScore2.Select();
                break;
            case 3:
                buttonScore3.Select();
                break;
            case 4:
                buttonScore4.Select();
                break;
            case 5:
                buttonScore5.Select();
                break;
            case 6:
                buttonScore6.Select();
                break;
            case 7:
                buttonScore7.Select();
                break;
            case 8:
                buttonScore8.Select();
                break;
            case 9:
                buttonScore9.Select();
                break;
            case 10:
                buttonScore10.Select();
                break;
            case null:
                buttonScoreNA.Select();
                break;
            default:
                buttonScore0.Select();
                break;
        }
    }

    public void loadNextQuestion()
    {
        if (currentIndex < totalQuestions)
        {
            // Aqui va el send answer a la base de datos
            StartCoroutine(postAnswers(currentIndex));
            currentIndex++;
            updateQuestion(currentIndex);
            // Función para la animación
        }
        else
        {
            StartCoroutine(postAnswers(currentIndex));
            toTeacherMenu();
        }
    }

    public void toTeacherMenu()
    {
        SceneManager.LoadScene("teacher_menu");
    }

    public void toCommentSection()
    {
        SceneManager.LoadScene("commentTeachers");
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



    public IEnumerator postAnswers(int index)
    {
        JSONurl = "http://localhost:8080/api/answers/" + studentID + "/surveyQuestions/" + questions[index].surveyQuestionId.ToString();

        // AnswerData<string> answer = new AnswerData<string>("TEACHER_REGISTRATION", teacherID, null, questions[index].score.ToString());
        AnswerData answer = new AnswerData();
        answer.targetKind = "TEACHER_REGISTRATION";
        answer.crn = -1;
        answer.teacherRegistration = teacherID;
        answer.content = questions[index].score.ToString();


        string json = JsonUtility.ToJson(answer);

        var req = new UnityWebRequest(JSONurl, "POST");

        byte[] jsonToSend = new System.Text.UTF8Encoding().GetBytes(json);
        req.uploadHandler = (UploadHandler)new UploadHandlerRaw(jsonToSend);
        req.downloadHandler = (DownloadHandler)new DownloadHandlerBuffer();
        req.SetRequestHeader("Content-Type", "application/json");

        Debug.Log(json);

        yield return req.SendWebRequest();

        if (req.isNetworkError)
        {
            Debug.Log("Error While Sending: " + req.error);
        }
        else
        {
            Debug.Log("Received: " + req.downloadHandler.text);
        }
    }
}

