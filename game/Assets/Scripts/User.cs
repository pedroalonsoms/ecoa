using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class User : MonoBehaviour
{
    // public Text ID;
    // public Text Matricula;
    public string URL;
    public string ID;
    // Start is called before the first frame update
    void Awake()
    {
        URL = Application.absoluteURL;
        if (string.IsNullOrEmpty(URL))
        {
            ID = "A01741437";
        }
        else
        {
            // ID.text = URL;
            ID = URL.Substring(URL.Length - 9);
            // Matricula.text = matricula;
        }

    }
}
