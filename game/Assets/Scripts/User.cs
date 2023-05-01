using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class User : MonoBehaviour
{
    // public Text ID;
    // public Text Matricula;
    public string URL = " ";
    public string matricula;
    // Start is called before the first frame update
    void Start()
    {
        URL = Application.absoluteURL;
        // ID.text = URL;
        matricula = URL.Substring(URL.Length - 9);
        // Matricula.text = matricula;

        if (URL == " ")
        {
            matricula = "A0171437";
        }
    }
    // Update is called once per frame
    void Update()
    {

    }
}
