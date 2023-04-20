using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;
using System.IO;
using SimpleJSON;
using static Question;

public class QuestionAPI : MonoBehaviour
{
    public string JSONurl = "http://localhost:8080/api/questions";
    public string question = "";
    public string section = "";

    IEnumerator Start() 
    {
        UnityWebRequest web = UnityWebRequest.Get(JSONurl);
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
            Question[] Questions = InitializeArray<Question>(questionData.Count);

            var questionList = Questions.ToList();

            for(int c = 0; c<questionData.Count; c++){
                Debug.Log("Question: " + questionData[c]["title"].ToString());
                question = questionData[c]["title"].ToString();
                Debug.Log("Type: " + questionData[c]["section"].ToString());
                section = questionData[c]["section"].ToString();
                Question questionReceived = new Question(question, 0, " ", section);
                questionList.Add(questionReceived);
            }

            Questions = questionList.toArray();
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
}
