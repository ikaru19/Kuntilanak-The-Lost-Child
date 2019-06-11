#pragma strict
public var playerHealth : float = 100;
public var guiSkin : GUISkin;
var size : Vector2 = new Vector2(60,20);
var healthString : String;
var Enemy : Transform;
var loadMainMenu : String;

function Start () {
	
}

function Update () {
	healthString = playerHealth.ToString("#");
		
	if(playerHealth < 0){
		Application.LoadLevel("MainMenu");
	}
	
	
	if(Vector3.Distance(transform.position,Enemy.position) <= 2)
		{
				
			playerHealth -= 1;
			healthString = playerHealth.ToString("#");
		}
	if(Vector3.Distance(transform.position,Enemy.position) >= 2 && playerHealth < 100){	
		
			playerHealth += 0.05;
		}
		
	
}

function OnGUI()
{
 
    // draw the background:
//    GUI.BeginGroup (new Rect (pos.x, pos.y, size.x, size.y));
        //GUI.Box (Rect (0,0, size.x, size.y),progressBarEmpty);
		
		 	GUI.Label (Rect (0, 0 , size.x, size.y), "Health :"+healthString);
        // draw the filled-in part:
    //    GUI.BeginGroup (new Rect (0, 0, size.x * barDisplay, size.y));
      //      GUI.Box (Rect (0,0, size.x, size.y),progressBarFull);
       // GUI.EndGroup ();
 
 //   GUI.EndGroup ();
 
} 