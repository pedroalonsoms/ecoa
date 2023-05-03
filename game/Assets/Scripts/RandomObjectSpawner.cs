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

public class RandomObjectSpawner : MonoBehaviour
{

    public GameObject[] myObjects;
    public string JSONurl = "http://localhost:8080/api/prizes?random=true&limit=1";
    public string prize;
    public string prizeType;
    public TextMeshProUGUI prizeTextBox;

    IEnumerator Start() 
    {
        UnityWebRequest web = UnityWebRequest.Get(JSONurl);
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
            Debug.Log(jsonReceived["prizes"][0]["explanation"]);
            prize = jsonReceived["prizes"][0]["explanation"];
            Debug.Log(jsonReceived["prizes"][0]["kind"]);
            prizeType = jsonReceived["prizes"][0]["kind"];
        }

        prizeTextBox.text = "Felicidades haz ganado " + prize;
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            Vector3 randomSpawnPosition = new Vector3(UnityEngine.Random.Range(-1, -1), 4, UnityEngine.Random.Range(7, 7));

            if (prizeType == "TEC_STORE") 
            {   Instantiate(myObjects[2], randomSpawnPosition, Quaternion.identity);   }
            else if (prizeType == "CARLS_JR") 
            {   Instantiate(myObjects[0], randomSpawnPosition, Quaternion.identity);   }
            else if (prizeType == "SUBWAY") 
            {   Instantiate(myObjects[3], randomSpawnPosition, Quaternion.identity);   }
            else if (prizeType == "CHILAQUILES") 
            {   Instantiate(myObjects[1], randomSpawnPosition, Quaternion.identity);   }
        }
    }

   
}
