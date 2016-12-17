#pragma strict
var style :GUIStyle;
var obj :GameObject;
var objCar :GameObject;
var script :script_scene_main;
var windowRect : Rect = Rect (0, 0, 150, 250);

function Start() {
    obj = GameObject.Find("script_scene_main");
    script = obj.GetComponent(script_scene_main);
}

function Update() {

}

function OnCollisionEnter (collision : Collision) {
	UnityEngine.SceneManagement.SceneManager.LoadScene("scene_odaiba");
	//Debug.Log(""+collision.gameObject);
}