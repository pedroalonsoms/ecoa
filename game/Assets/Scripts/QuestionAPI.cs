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

public class QuestionAPI : MonoBehaviour
{
    public string JSONurl = "";
    public string JSONIDurl = "";
    public string ID = "";
    public string qID = "";
    public string qTitle = "";
    public string qSection = "";
    public string qAnswerKind = ""; 
    public TextMeshProUGUI pregunta;
    public TextMeshProUGUI profesorNombre;

    IEnumerator Start() 
    {
        pregunta = GameObject.Find("Question").GetComponent<TextMeshProUGUI>();
        profesorNombre = GameObject.Find("Profesor").GetComponent<TextMeshProUGUI>();

        UnityWebRequest web = UnityWebRequest.Get(JSONIDurl);
        web.useHttpContinue = false;

        yield return web.SendWebRequest();

        if (web.isNetworkError || web.isHttpError)
        {
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
            Debug.Log("Error API: " + web.error);
        }
        else
        {
            Debug.Log(web.downloadHandler.text);
            JSONNode questionData = SimpleJSON.JSON.Parse(web.downloadHandler.text);
            Question[] Questions = InitializeArray<Question>(questionData["questions"].Count);

            for(int c = 0; c<questionData["questions"].Count; c++){

                Debug.Log("ID: " + questionData["questions"][c]["id"].ToString());
                qID = questionData["questions"][c]["id"].ToString();

                Debug.Log("Title: " + questionData["questions"][c]["title"].ToString());
                qTitle = questionData["questions"][c]["title"].ToString();

                Debug.Log("Section: " + questionData["questions"][c]["section"].ToString());
                qSection = questionData["questions"][c]["section"].ToString();

                Debug.Log("Answer Kind: " + questionData["questions"][c]["answerKind"].ToString());
                qAnswerKind = questionData["questions"][c]["answerKind"].ToString();

                Question questionReceived = new Question(qID, qTitle, qSection, qAnswerKind);
                Debug.Log(questionReceived.toString());

                Questions[c] = questionReceived;
            }

            Debug.Log(Questions);
            Debug.Log(Questions[0].toString());
            pregunta.text = Questions[0].title;
            //LoadQuestion(Questions[0]);
        }
    }

    void LoadQuestion(Question question){

        if (question.answerKind == "TEXT"){
            SceneManager.LoadScene("comment");
            pregunta.text = question.title;
        }
        else if (question.answerKind == "NUMERIC"){
            SceneManager.LoadScene("numeric");
            pregunta.text = question.title;
        }
        
    }

    T[] InitializeArray<T>(int length) where T : new()
    {
        T[] array = new T[length];
        for (int i = 0; i < length; ++i)
        {
            array[i] = new T();
        }

        return array;
    }

    public void UpdateQuestion(string newQuestion) 
    {
        pregunta.text = newQuestion;
    }

    public void UpdateProfesor(string newName) 
    {
        profesorNombre.text = newName;
    }
}

