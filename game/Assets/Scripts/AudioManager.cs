using UnityEngine.Audio;
using UnityEngine;
using System;

public class AudioManager : MonoBehaviour
{
    public Sonido[] sounds;

    void Awake()
    {
        foreach (Sonido s in sounds)
        {
            s.source = gameObject.AddComponent<AudioSource>();
            s.source.clip = s.clip;
            s.source.volume = s.volume;
            s.source.pitch = s.pitch;
            s.source.loop = s.loop;
        }
    }

    public void Play(string name)
    {
        Sonido s = Array.Find(sounds, sonido => sonido.name == name);
        if (s == null)
        {
            Debug.LogWarning("Sonido: " + name + " no encontrado!");
            return;
        }
        s.source.Play();
    }

}