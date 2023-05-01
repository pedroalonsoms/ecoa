using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class TeacherUIManager : MonoBehaviour
{
    public TextMeshProUGUI pregunta;
    public TextMeshProUGUI profesorNombre;

    void Start()
    {
        pregunta = GameObject.Find("Question").GetComponent<TextMeshProUGUI>();
        profesorNombre = GameObject.Find("Profesor").GetComponent<TextMeshProUGUI>();
    }

    public void UpdateQuestion(string newQuestion)
    {
        pregunta.text = newQuestion;
    }

    public void UpdateProfesor(string newName)
    {
        profesorNombre.text = newName;
    }
}