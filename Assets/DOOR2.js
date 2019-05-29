var doorClip : AnimationClip;
var Key : GameObject;
private var Door1 = false;
public var guiSkin : GUISkin;


function Start () 
{

}

function Update () 
{
	if (Input.GetKeyDown(KeyCode.E) && Door1 == true && Key.active == false)
	{
	GameObject.Find("Door1").animation.Play("DoorOpen");
	}
}

function OnTriggerEnter (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		Door1 = true;
	}
}

function OnTriggerExit (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		Door1 = false;
	}
}

function OnGUI ()
{
	if(Door1== true)
	{
		GUI.skin = guiSkin;
		GUI.Label (Rect (Screen.width/2-50, Screen.height/2-55, 120, 50), "Press E to Open The Door");
	
	}

}
