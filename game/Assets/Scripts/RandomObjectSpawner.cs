using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RandomObjectSpawner : MonoBehaviour
{

    public GameObject[] myObjects;

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            int randomIndex = Random.Range(0, myObjects.Length);
            Vector3 randomSpawnPosition = new Vector3(Random.Range(-1, -1), 4, Random.Range(7, 7));

            Instantiate(myObjects[randomIndex], randomSpawnPosition, Quaternion.identity);
        }
    }

   
}
