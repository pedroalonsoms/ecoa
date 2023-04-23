using UnityEngine;
using UnityEngine.Audio;

[System.Serializable]
public class Sonido
{
    public string name;
    public AudioClip clip;
    [Range(0.4f, 1f)]
    public float volume;
    public float pitch;
    public bool loop;
    public AudioSource source;
}