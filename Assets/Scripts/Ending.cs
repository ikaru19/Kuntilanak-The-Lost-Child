using UnityEngine;
using System.Collections;

public class Ending : MonoBehaviour {

	public void cangemenuscene(string MainMenu)
	{
		Application.LoadLevel (MainMenu);
	}
}