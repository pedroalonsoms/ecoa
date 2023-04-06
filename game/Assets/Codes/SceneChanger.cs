using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneChanger : MonoBehaviour
{
    public void ChangerScenePre()
    {
        SceneManager.LoadScene("postmenu_materia");
    }

    public void ChangerScene1()
    {
        SceneManager.LoadScene("template");
    }

    public void ChangerScene2()
    {
        SceneManager.LoadScene("template2");
    }

    public void ChangerScene3()
    {
        SceneManager.LoadScene("template3");
    }

    public void ChangerScene4()
    {
        SceneManager.LoadScene("template4");
    }
}
