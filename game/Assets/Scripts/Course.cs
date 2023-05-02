using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Course : MonoBehaviour
{
    // Start is called before the first frame update
    public string CRN;
    public string title;
    public static Course instance = null;

    void Start()
    {
        if (instance == null) 
        {
            instance = this;
            DontDestroyOnLoad(this.gameObject);
        } 
        else 
        {
            Destroy(this.gameObject);
        }
        
    }
}
