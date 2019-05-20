var doorClip : AnimationClip;
var Key : GameObject;
private var Door = false;
public var guiSkin : GUISkin;


function Start () 
{

}

function Update () 
{
	if (Input.GetKeyDown(KeyCode.E) && Door == true && Key.active == false)
	{
	GameObject.Find("Door").animation.Play("DoorAnimation");
	}
}

function OnTriggerEnter (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		Door = true;
	}
}

function OnTriggerExit (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		Door = false;
	}
}

function OnGUI ()
{
	if(Door == true)
	{
		GUI.skin = guiSkin;
		GUI.Label (Rect (Screen.width/2-50, Screen.height/2-55, 120, 50), "Press E to Open The Door");
	
	}

}