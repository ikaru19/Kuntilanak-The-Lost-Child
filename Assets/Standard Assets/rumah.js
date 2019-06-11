private var playerNextToKey = false;
public var guiSkin : GUISkin;

function OnTriggerEnter (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		playerNextToKey = true;
	}
}

function OnTriggerExit (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		playerNextToKey = false;
	}
}
function OnGUI ()
{
	if(playerNextToKey == true)
	{
		GUI.skin = guiSkin;
		GUI.Label (Rect (Screen.width/2-50, Screen.height/2-120, 200, 100), "Disana terdapat rumah, coba cari anak di dalam rumah tersebut");
	
	}

}