using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Networking;
using System.IO;
using SimpleJSON;
using UnityEngine.SceneManagement;

public class TeacherMenuDBManager : MonoBehaviour
{
    public string JSONurl = "";
    public string studentID = "";

    public Image Teacher1;
    public Image Teacher2;
    public Image Teacher3;
    public Image Teacher4;
    public Image Teacher5;
    public Image Teacher6;
    public Image Teacher7;
    public Image Teacher8;
    public Image Teacher9;
    public Image Teacher10;

    public Text Title1;
    public Text Title2;
    public Text Title3;
    public Text Title4;
    public Text Title5;
    public Text Title6;
    public Text Title7;
    public Text Title8;
    public Text Title9;
    public Text Title10;

    public Image Status1;
    public Image Status2;
    public Image Status3;
    public Image Status4;
    public Image Status5;
    public Image Status6;
    public Image Status7;
    public Image Status8;
    public Image Status9;
    public Image Status10;

    public Button flag1;
    public Button flag2;
    public Button flag3;
    public Button flag4;
    public Button flag5;
    public Button flag6;
    public Button flag7;
    public Button flag8;
    public Button flag9;
    public Button flag10;

    public string sTitle;
    public int sQAnswered;
    public int sQAmount;

    public int totalTeachers;

    public Teacher[] teachers = new Teacher[10];

    public Sprite completed;
    public Sprite inProgress;
    public Sprite uncompleted;
    public Sprite invalid;

    public Sprite yellow_flag;
    public Sprite blue_flag;
    public Sprite red_flag;
    public Sprite darkblue_flag;
    public Sprite lila_flag;
    public Sprite purple_flag;
    public Sprite orange_flag;
    public Sprite black_flag;
    public Sprite green_flag;
    public Sprite gray_flag;


    IEnumerator Start() 
    {
        JSONurl = "http://localhost:8080/api/progress/student/" + studentID;
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
            JSONNode jsonReceived = SimpleJSON.JSON.Parse(web.downloadHandler.text);
            Debug.Log(jsonReceived["TEACHERS"].ToString());

            totalTeachers = jsonReceived["TEACHERS"]["progress"].Count;
            string titleReceived;
            int qAnsReceived, qAmoReceived;
            
            for (int c = 0; c < 10; c++) {

                titleReceived = jsonReceived["TEACHERS"]["progress"][c]["fullName"];
                qAnsReceived = jsonReceived["TEACHERS"]["progress"][c]["questionsAnswered"];
                qAmoReceived = jsonReceived["TEACHERS"]["progress"][c]["questionAmount"];

                if (c < totalTeachers)
                {   teachers[c] = new Teacher(titleReceived, qAnsReceived, qAmoReceived);   }
                else 
                {   teachers[c] = new Teacher("No Teacher", 0, 0);   }
            }
        }
    loadFlags();
}

    void loadFlags() {
        for (int i = 0; i < 10; i++) {
            switch (i)
            {
                case 0:
                    if (teachers[i].title != "No Teacher") {
                        Teacher1.sprite = purple_flag;
                        Title1.text = teachers[i].title;
                        flag1.onClick.AddListener(teacherNumericScene);
                        if (teachers[i].questionsAnswered == 0) 
                        {   Status1.sprite = uncompleted;   } 
                        else if (teachers[i].questionsAnswered < teachers[i].questionsAmount) 
                        {   Status1.sprite = inProgress;    }
                        else if (teachers[i].questionsAnswered == teachers[i].questionsAmount) 
                        {   Status1.sprite = completed;   }
                        else
                        {   Status1.sprite = invalid;   }
                    }
                    else {
                        Teacher1.sprite = gray_flag;
                        Title1.text = teachers[i].title;
                        Status1.sprite = invalid;
                    }
                    break;
                case 1:
                    if (teachers[i].title != "No Teacher") {
                        Teacher2.sprite = orange_flag;
                        Title2.text = teachers[i].title; 
                        flag2.onClick.AddListener(teacherNumericScene);
                        if (teachers[i].questionsAnswered == 0) 
                        {   Status2.sprite = uncompleted;   } 
                        else if (teachers[i].questionsAnswered < teachers[i].questionsAmount) 
                        {   Status2.sprite = inProgress;    }
                        else if (teachers[i].questionsAnswered == teachers[i].questionsAmount) 
                        {   Status2.sprite = completed;   }
                        else
                        {   Status2.sprite = invalid;   }
                    }
                    else {
                        Teacher2.sprite = gray_flag;
                        Title2.text = teachers[i].title;
                        Status2.sprite = invalid;
                    }
                    break;
                case 2:
                    if (teachers[i].title != "No Teacher") {
                        Teacher3.sprite = blue_flag;
                        Title3.text = teachers[i].title;
                        flag3.onClick.AddListener(teacherNumericScene);
                        if (teachers[i].questionsAnswered == 0) 
                        {   Status3.sprite = uncompleted;   } 
                        else if (teachers[i].questionsAnswered < teachers[i].questionsAmount) 
                        {   Status3.sprite = inProgress;    }
                        else if (teachers[i].questionsAnswered == teachers[i].questionsAmount) 
                        {   Status3.sprite = completed;   }
                        else
                        {   Status3.sprite = invalid;   }
                    }
                    else {
                        Teacher3.sprite = gray_flag;
                        Title3.text = teachers[i].title;
                        Status3.sprite = invalid;
                    }
                    break;
                case 3:
                    if (teachers[i].title != "No Teacher") {
                        Teacher4.sprite = black_flag;
                        Title4.text = teachers[i].title;
                        flag4.onClick.AddListener(teacherNumericScene);
                        if (teachers[i].questionsAnswered == 0) 
                        {   Status4.sprite = uncompleted;   } 
                        else if (teachers[i].questionsAnswered < teachers[i].questionsAmount) 
                        {   Status4.sprite = inProgress;    }
                        else if (teachers[i].questionsAnswered == teachers[i].questionsAmount) 
                        {   Status4.sprite = completed;   }
                        else
                        {   Status4.sprite = invalid;   }
                    }
                    else {
                        Teacher4.sprite = gray_flag;
                        Title4.text = teachers[i].title;
                        Status4.sprite = invalid;
                    }
                    break;
                case 4:
                    if (teachers[i].title != "No Teacher") {
                        Teacher5.sprite = yellow_flag;
                        Title5.text = teachers[i].title;
                        flag5.onClick.AddListener(teacherNumericScene);
                        if (teachers[i].questionsAnswered == 0) 
                        {   Status5.sprite = uncompleted;   } 
                        else if (teachers[i].questionsAnswered < teachers[i].questionsAmount) 
                        {   Status5.sprite = inProgress;    }
                        else if (teachers[i].questionsAnswered == teachers[i].questionsAmount) 
                        {   Status5.sprite = completed;   }
                        else
                        {   Status5.sprite = invalid;   }
                    }
                    else {
                        Teacher5.sprite = gray_flag;
                        Title5.text = teachers[i].title;
                        Status5.sprite = invalid;
                    }
                    break;
                case 5:
                    if (teachers[i].title != "No Teacher") {
                        Teacher6.sprite = darkblue_flag;
                        Title6.text = teachers[i].title;
                        flag6.onClick.AddListener(teacherNumericScene);
                        if (teachers[i].questionsAnswered == 0) 
                        {   Status6.sprite = uncompleted;   } 
                        else if (teachers[i].questionsAnswered < teachers[i].questionsAmount) 
                        {   Status6.sprite = inProgress;    }
                        else if (teachers[i].questionsAnswered == teachers[i].questionsAmount) 
                        {   Status6.sprite = completed;   }
                        else
                        {   Status6.sprite = invalid;   }
                    }
                    else {
                        Teacher6.sprite = gray_flag;
                        Title6.text = teachers[i].title;
                        Status6.sprite = invalid;
                    }
                    break;
                case 6:
                    if (teachers[i].title != "No Teacher") {
                        Teacher7.sprite = lila_flag;
                        Title7.text = teachers[i].title;
                        flag7.onClick.AddListener(teacherNumericScene);
                        if (teachers[i].questionsAnswered == 0) 
                        {   Status7.sprite = uncompleted;   } 
                        else if (teachers[i].questionsAnswered < teachers[i].questionsAmount) 
                        {   Status7.sprite = inProgress;    }
                        else if (teachers[i].questionsAnswered == teachers[i].questionsAmount) 
                        {   Status7.sprite = completed;   }
                        else
                        {   Status7.sprite = invalid;   }
                    }
                    else {
                        Teacher7.sprite = gray_flag;
                        Title7.text = teachers[i].title;
                        Status7.sprite = invalid;
                    }
                    break;
                case 7:
                    if (teachers[i].title != "No Teacher") {
                        Teacher8.sprite = red_flag;
                        Title8.text = teachers[i].title;
                        flag8.onClick.AddListener(teacherNumericScene);
                        if (teachers[i].questionsAnswered == 0) 
                        {   Status8.sprite = uncompleted;   } 
                        else if (teachers[i].questionsAnswered < teachers[i].questionsAmount) 
                        {   Status8.sprite = inProgress;    }
                        else if (teachers[i].questionsAnswered == teachers[i].questionsAmount) 
                        {   Status8.sprite = completed;   }
                        else
                        {   Status8.sprite = invalid;   }
                    }
                    else {
                        Teacher8.sprite = gray_flag;
                        Title8.text = teachers[i].title;
                        Status8.sprite = invalid;
                    }
                    break;
                case 8:
                    if (teachers[i].title != "No Teacher") {
                        Teacher9.sprite = green_flag;
                        Title9.text = teachers[i].title;
                        flag9.onClick.AddListener(teacherNumericScene);
                        if (teachers[i].questionsAnswered == 0) 
                        {   Status9.sprite = uncompleted;   } 
                        else if (teachers[i].questionsAnswered < teachers[i].questionsAmount) 
                        {   Status9.sprite = inProgress;    }
                        else if (teachers[i].questionsAnswered == teachers[i].questionsAmount) 
                        {   Status9.sprite = completed;   }
                        else
                        {   Status9.sprite = invalid;   }
                    }
                    else {
                        Teacher9.sprite = gray_flag;
                        Title9.text = teachers[i].title;
                        Status9.sprite = invalid;
                    }
                    break;
                case 9:
                    if (teachers[i].title != "No Teacher") {
                        Teacher10.sprite = purple_flag;
                        Title10.text = teachers[i].title;
                        flag10.onClick.AddListener(teacherNumericScene);
                        if (teachers[i].questionsAnswered == 0) 
                        {   Status10.sprite = uncompleted;   } 
                        else if (teachers[i].questionsAnswered < teachers[i].questionsAmount) 
                        {   Status10.sprite = inProgress;    }
                        else if (teachers[i].questionsAnswered == teachers[i].questionsAmount) 
                        {   Status10.sprite = completed;   }
                        else
                        {   Status10.sprite = invalid;   }
                    }
                    else {
                        Teacher10.sprite = gray_flag;
                        Title10.text = teachers[i].title;
                        Status10.sprite = invalid;
                    }
                    break;
                default:
                    Debug.Log("End of questons array");
                    break;
            }
        }
    }
    void teacherNumericScene() {
        SceneManager.LoadScene("teacher_numeric");
    }
}
