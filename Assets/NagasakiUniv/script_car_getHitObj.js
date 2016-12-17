#pragma strict
var obj :GameObject;
var objDoor : GameObject;
var script :script_scene_main;


function Start() {
    obj = GameObject.Find("script_scene_main");
    objDoor = GameObject.Find("Door_Docodemo");
    script = obj.GetComponent(script_scene_main);
}

function Update() {

}

function OnCollisionEnter (collision : Collision) {
	script.car_hit = collision.gameObject;
	if(script.car_hit == objDoor){
		Debug.Log("Hit Door");
	}
}

