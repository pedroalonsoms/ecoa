using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Question
{
    public string id;
    public string title;
    public string section;
    public string answerKind;
    public System.Nullable<int> score;
    public string comment;
    public string evaluatedObject;
    public string CRN;
    public string teacherRegistration;
    public int surveyQuestionId;

    public Question(){
        id = "N/A";
        surveyQuestionId = 0;
        title = "N/A";
        section = "N/A";
        answerKind = "N/A";
        score = 0;
        comment = "N/A";
        evaluatedObject = "N/A";
        CRN = "N/A";
        teacherRegistration = "N/A";
    }

    public Question(string _id, int _surveyQuestionId,  string _title, string _section, string _answerKind, string _evaluatedObject){
        id = _id;
        surveyQuestionId = _surveyQuestionId;
        title = _title;
        section = _section;
        answerKind = _answerKind;
        evaluatedObject = _evaluatedObject;

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
        res = "ID: " + id + "SQID: " + surveyQuestionId + "Title: " + title + "Section: " + section + "Answer Kind: " + answerKind + "Score: " + score.ToString() +  "Comment: " + comment + "Name: " + evaluatedObject + CRN +  teacherRegistration;
        return res;
    }
}
