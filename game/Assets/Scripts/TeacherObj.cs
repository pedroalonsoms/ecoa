using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TeacherObj : MonoBehaviour
{
    public string ID;
    public string name;
    public static TeacherObj instance = null;

    void Start()
    {
        if (instance == null) 
        {
            instance = this;
            DontDestroyOnLoad(gameObject);
        } 
        else 
        {
            Destroy(gameObject);
        }
        
    }
}
