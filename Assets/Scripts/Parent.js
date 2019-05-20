 public var child : Transform;

function OnTriggerEnter (c : Collider)
{
	child.active = true;
	
}
function OnTriggerExit (c : Collider)
{
 
	child.active = false;

}
