var doorClip : AnimationClip;
var Key : GameObject;
private var Door2 = false;
public var guiSkin : GUISkin;


function Start () 
{

}

function Update () 
{
	if (Input.GetKeyDown(KeyCode.E) && Door2 == true && Key.active == false)
	{
	GameObject.Find("Door2").animation.Play("lemariBuka");
	}
}

function OnTriggerEnter (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		Door2 = true;
	}
}

function OnTriggerExit (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		Door2 = false;
	}
}

function OnGUI ()
{
	if(Door2 == true)
	{
		GUI.skin = guiSkin;
		GUI.Label (Rect (Screen.width/2-50, Screen.height/2-55, 120, 50), "Press E to Open The Door");
	
	}

}