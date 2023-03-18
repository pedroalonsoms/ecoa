using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerScript : MonoBehaviour
{
    // Start is called before the first frame update
    Animator animator;
    AudioSource audioSource;
    public AudioClip attackSound;
    public AudioClip deathSound;
    public AudioClip hurtSound;
    public AudioClip walkSound;
    void Start()
    {
        animator = GetComponent<Animator>();
        audioSource = GetComponent<AudioSource>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.LeftArrow) || Input.GetKey(KeyCode.RightArrow))
        {
            animator.Play("PlayerWalk");
            audioSource.clip = walkSound;
            if (!audioSource.isPlaying)
            {
                audioSource.Play();
            }
        }
        else if (Input.GetKey(KeyCode.X))
        {
            animator.Play("PlayerAttack");
            audioSource.clip = attackSound;
            audioSource.Play();
        }
        else if (Input.GetKey(KeyCode.Y))
        {
            animator.Play("PlayerDeath");
            audioSource.clip = deathSound;
            audioSource.Play();
        }
        else if (Input.GetKey(KeyCode.Z))
        {
            animator.Play("PlayerHurt");
            audioSource.clip = hurtSound;
            audioSource.Play();
        }
        else
        {
            animator.Play("PlayerIdle");
        }
    }
}
