using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Teacher
{
    public string title;
    public int questionsAnswered;
    public int questionsAmount;
    public string ID;

    public Teacher(){
        title = "No Teacher";
        questionsAnswered = 0;
        questionsAmount = 0;
        ID = "N/A";
    }

    public Teacher(string _title, int _questionsAnswered, int _questionsAmount, string _ID){
        title = _title;
        questionsAnswered = _questionsAnswered;
        questionsAmount = _questionsAmount;
        ID = _ID;
    }

    public string toString(){
        string res;
        res = "Title: " + title + "Questions Answered: " + questionsAnswered.ToString() + "Questions Amount: " + questionsAmount.ToString() + "ID: " + ID;
        return res;
    }
}
