using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneChanger : MonoBehaviour
{
    public void toMain()
    {   SceneManager.LoadScene("main");   } // Mueve a escena principal

    public void toSubjectMenu()
    {   SceneManager.LoadScene("subject_menu");   } // Mueve a escena de menú de materias

    public void toTeacherMenu()
    {   SceneManager.LoadScene("teacher_menu");   } // Mueve a escena de menú de profesores

    public void toMenu()
    {   SceneManager.LoadScene("menu");   } // Mueve a menú principal

    public void toTeacherNumericQuestion()
    {   SceneManager.LoadScene("teacher_numeric");   } // Mueve a escena de pregunta cerrada de profesor con escala del 0 al 10

    public void toSubjectNumericQuestion()
    {   SceneManager.LoadScene("subject_numeric");   }

    public void toBlockNumericQuestion()
    {   SceneManager.LoadScene("block_numeric");   }

    public void toComment()
    {   SceneManager.LoadScene("comment");   } // Mueve a escena de pregunta abierta

    public void toFinal()
    {   SceneManager.LoadScene("final");   } // Mueve a escena principal

}
