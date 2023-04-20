using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Question
{
    public string question = "";
    public int cal;
    public string comment = "";
    public string section = "";

    public Question(string Q, int num, string com, string sec){
        question = Q;
        cal = num;
        comment = com;
        section = sec;
    }

    public string toString(){
        string res;
        res = question + cal.ToString() + comment;
        return res;
    }
}
