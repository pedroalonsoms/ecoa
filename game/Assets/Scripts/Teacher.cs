using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Teacher
{
    public string title;
    public int questionsAnswered;
    public int questionsAmount;

    public Teacher(){
        title = "No Teacher";
        questionsAnswered = 0;
        questionsAmount = 0;
    }

    public Teacher(string _title, int _questionsAnswered, int _questionsAmount){
        title = _title;
        questionsAnswered = _questionsAnswered;
        questionsAmount = _questionsAmount;
    }

    public string toString(){
        string res;
        res = "Title: " + title + "Questions Answered: " + questionsAnswered.ToString() + "Questions Amount: " + questionsAmount.ToString();
        return res;
    }
}
