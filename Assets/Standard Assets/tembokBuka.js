var doorClip : AnimationClip;
var Key : GameObject;
private var Door3 = false;
public var guiSkin : GUISkin;


function Start () 
{

}

function Update () 
{
	if (Input.GetKeyDown(KeyCode.E) && Door3 == true && Key.active == false)
	{
	GameObject.Find("Door3").animation.Play("lemariAnim");
	}
}

function OnTriggerEnter (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		Door3 = true;
	}
}

function OnTriggerExit (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		Door3 = false;
	}
}

function OnGUI ()
{
	if(Door3 == true)
	{
		GUI.skin = guiSkin;
		GUI.Label (Rect (Screen.width/2-50, Screen.height/2-55, 120, 50), "Press E to Open The Door");
	
	}

}