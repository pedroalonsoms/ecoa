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


public class BlockQuestionManager : MonoBehaviour
{
    public GameObject courseObject;
    public GameObject userObject;
    public string studentID;
    public int courseCRN;
    public string courseTitle;
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
        courseObject = GameObject.Find("Course");

        studentID = userObject.GetComponent<User>().ID;
        courseCRN = courseObject.GetComponent<Course>().CRN;
        courseTitle = courseObject.GetComponent<Course>().title;

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

        JSONurl = "http://localhost:8080/api/surveys/" + ID + "?section=BLOCK&isActive=true";

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

            for(int c = 0; c<totalQuestions; c++){

                Debug.Log("ID: " + questionData["questions"][c]["id"].ToString());
                qID = questionData["questions"][c]["id"].ToString();

                Debug.Log("Title: " + questionData["questions"][c]["title"].ToString());
                qTitle = questionData["questions"][c]["title"].ToString();

                Debug.Log("Section: " + questionData["questions"][c]["section"].ToString());
                qSection = questionData["questions"][c]["section"].ToString();

                Debug.Log("Answer Kind: " + questionData["questions"][c]["answerKind"].ToString());
                qAnswerKind = questionData["questions"][c]["answerKind"].ToString();

                if (qSection == "BLOCK"){
                    qSection = "CRN";
                } else {
                    qSection = "TEACHER_REGISTRATION";
                }

                Question questionReceived = new Question(qID, qTitle, qSection, qAnswerKind, courseTitle);
                Debug.Log(questionReceived.toString());

                questions[c] = questionReceived;
            }

            // Debug.Log(questions);
            // Debug.Log(questions[0].toString());
            // currentIndex = 0;
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

                for(int x = 0; x<totalAnswers; x++){
                    if (answersData[x]["crn"] != null) {
                        for (int i = 0; i<questionData["questions"].Count; i++){
                            
                            if (/*answersData[x]["questionId"] == questions[i].id &&*/ answersData[x]["crn"] == courseCRN) {
                                Debug.Log("Pertenece: ");
                                Debug.Log(questions[i].toString());
                                // if (int.TryParse(answersData[x]["content"], out scoreNum) || answersData[x]["content"] == null) {        
                                //     questions[i].score = answersData[x]["content"];
                                // }
                                // else {
                                //     questions[i].comment = answersData[x]["content"];
                                // }
                                if (questions[i].answerKind == "NUMERIC"){
                                    questions[i].score = int.Parse(answersData[x]["content"]);
                                } else {
                                    questions[i].comment = answersData[x]["content"];
                                }
                            }
                        }
                    }
                }
                for (int i = 0; i<questionData["questions"].Count; i++){
                          Debug.Log(questions[i].toString());
                }

                
                // Debug.Log(questions[0].toString());
                currentIndex = 0;
                updateQuestion(currentIndex);
            }
        }
    }
    void Update() {
        if (currentIndex == 0) {
            backButtonI.sprite = bButtonOff;
            nextButtonI.sprite = nButtonOn;
        } else if (currentIndex < totalQuestions-1) {
            backButtonI.sprite = bButtonOn;
            nextButtonI.sprite = nButtonOn;
        } else{
            nextButtonI.sprite = eButton;
        }
    }

    void updateQuestion(int qIndex) 
    {   
        pregunta.text = questions[qIndex].title; 
        profesorNombre.text = courseTitle;   
        Debug.Log(questions[qIndex].score);
    }

    public void loadNextQuestion(){
        if (currentIndex < totalQuestions-1) {
            // Aqui va el send answer a la base de datos
            currentIndex++;
            updateQuestion(currentIndex);
        } else {
            // Aquí va el send answer a la base de datos 
            SceneManager.LoadScene("subject_menu");
        }
    }

    public void loadPrevQuestion(){
        if  (currentIndex > 0) {
            currentIndex--;
            updateQuestion(currentIndex);
        }
    }

    public void score0() 
    {   questions[currentIndex].score = 0;  Debug.Log(questions[currentIndex].score);}
    public void score1() 
    {   questions[currentIndex].score = 1;  Debug.Log(questions[currentIndex].score);}
    public void score2() 
    {   questions[currentIndex].score = 2;  Debug.Log(questions[currentIndex].score);}
    public void score3() 
    {   questions[currentIndex].score = 3;  Debug.Log(questions[currentIndex].score);}
    public void score4() 
    {   questions[currentIndex].score = 4;  Debug.Log(questions[currentIndex].score);}
    public void score5() 
    {   questions[currentIndex].score = 5;  Debug.Log(questions[currentIndex].score);}
    public void score6() 
    {   questions[currentIndex].score = 6;  Debug.Log(questions[currentIndex].score);}
    public void score7() 
    {   questions[currentIndex].score = 7;  Debug.Log(questions[currentIndex].score);}
    public void score8() 
    {   questions[currentIndex].score = 8;  Debug.Log(questions[currentIndex].score);}
    public void score9() 
    {   questions[currentIndex].score = 9;  Debug.Log(questions[currentIndex].score);}
    public void score10() 
    {   questions[currentIndex].score = 10;  Debug.Log(questions[currentIndex].score);}
    public void scoreNull() 
    {   questions[currentIndex].score = null;  Debug.Log(questions[currentIndex].score);}

}

