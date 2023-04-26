using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Subject
{
    public string title;
    public string kind;
    public int questionsAnswered;
    public int questionsAmount;

    public Subject(){
        title = "No Subject";
        kind = "N/A";
        questionsAnswered = 0;
        questionsAmount = 0;
    }

    public Subject(string _title, string _kind, int _questionsAnswered, int _questionsAmount){
        title = _title;
        kind = _kind;
        questionsAnswered = _questionsAnswered;
        questionsAmount = _questionsAmount;
    }

    public string toString(){
        string res;
        res = "Title: " + title + "Kind: " + kind + "Questions Answered: " + questionsAnswered.ToString() + "Questions Amount: " + questionsAmount.ToString();
        return res;
    }
}
