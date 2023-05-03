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

                Debug.Log("QSurvey ID: " + questionData["questions"][c]["surveyQuestionId"].ToString());
                qSurveyQuestionID = questionData["questions"][c]["surveyQuestionId"];

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

                Question questionReceived = new Question(qID, qSurveyQuestionID, qTitle, qSection, qAnswerKind, courseTitle);
                Debug.Log(questionReceived.toString());

                questions[c] = questionReceived;
            }

            // Debug.Log(questions);
            // Debug.Log(questions[0].toString());
            // currentIndex = 0;
            // updateQuestion(currentIndex);
            // Debug.Log(questions[0].toString());
            currentIndex = 0;
            updateQuestion(currentIndex);  
        }

        for (int f = 0; f < totalQuestions; f++) {
            JSONurl = "http://localhost:8080/api/answers/" + studentID+ "/surveyQuestions/" + questions[f].surveyQuestionId.ToString();

            web = UnityWebRequest.Get(JSONurl);
            web.useHttpContinue = false;

            yield return web.SendWebRequest();

            if (web.isNetworkError || web.isHttpError)
            {
                // SceneManager.LoadScene("Error");
                Debug.Log(JSONurl);
                Debug.Log("Error API: " + web.error);
            }
            else
            {
                Debug.Log(web.downloadHandler.text);
                JSONNode answerData = SimpleJSON.JSON.Parse(web.downloadHandler.text);
                if (questions[f].answerKind ==  "\"NUMERIC\"")
                {
                    questions[f].score = int.Parse(answerData["content"]);
                }
                else
                {
                    questions[f].comment = answerData["content"];
                }
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
            StartCoroutine(postAnswers(currentIndex));
            currentIndex++;
            updateQuestion(currentIndex);
        } else {
            // Aquí va el send answer a la base de datos 
            StartCoroutine(postAnswers(currentIndex));
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

    public IEnumerator postAnswers(int index) {
        JSONurl = "http://localhost:8080/api/answers/" + studentID + "/surveyQuestions/" + questions[index].surveyQuestionId.ToString();

        // AnswerData<string> answer = new AnswerData<string>("TEACHER_REGISTRATION", teacherID, null, questions[index].score.ToString());
        AnswerData answer = new AnswerData();
        answer.targetKind = "CRN";
        answer.crn = courseCRN.ToString();
        answer.teacherRegistration = "-1";
        answer.content = questions[index].score.ToString();


        string json = JsonUtility.ToJson(answer);

        var req = new UnityWebRequest(JSONurl,"POST");

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

