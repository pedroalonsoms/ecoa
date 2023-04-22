using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Question
{
    public string id;
    public string title;
    public string section;
    public string answerKind;
    public int score;
    public string comment;

    public Question(){
        id = "N/A";
        title = "N/A";
        section = "N/A";
        answerKind = "N/A";
        score = 0;
        comment = "N/A";
    }

    public Question(string _id, string _title, string _section, string _answerKind){
        id = _id;
        title = _title;
        section = _section;
        answerKind = _answerKind;

        if (_answerKind == "NUMERIC")
        {
            comment = "N/A";
            score = 0;
        }
        else if (_answerKind == "COMMENT")
        {
            comment = "Empty";
            score = 0;
        }

    }

    public string toString(){
        string res;
        res = "ID: " + id + "Title: " + title + "Section: " + section + "Answer Kind: " + answerKind + "Score: " + score.ToString() +  comment;
        return res;
    }
}
