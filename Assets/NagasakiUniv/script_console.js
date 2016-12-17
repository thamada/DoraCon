#pragma strict
var style :GUIStyle;
var obj :GameObject;
var objCar :GameObject;
var script :script_scene_main;
var windowRect : Rect = Rect (0, 0, 150, 250);

function Start() {
    windowRect = Rect (0, 0, 150, 120);
}

function Update() {
    if (Input.GetKey(KeyCode.Escape)){
//        Application.Quit();
        Application.LoadLevel("main");
    }

}

function OnGUI() {
    obj = GameObject.Find("script_scene_main");
    script = obj.GetComponent(script_scene_main);
    windowRect = GUI.Window (0, windowRect, DoMyWindow, "Console");
}

function DoMyWindow (windowID : int) {
    objCar = GameObject.Find("Car");

    GUI.Label(Rect(10, 20, 200, 20), ""+ objCar.transform.position, style);
    GUI.Label(Rect(10, 40, 200, 20), ""+ objCar.transform.rotation, style);
    GUI.Label(Rect(10, 60, 200, 20), ""+ Input.GetAxis("Vertical")*1.0e3f, style);
    GUI.Label(Rect(10, 80, 200, 20), ""+ Input.GetAxis("Horizontal")*1.0e3f, style);
    GUI.Label(Rect(10, 100, 200, 20), ""+ script.car_hit, style);


/*
    if(GUI.Button (Rect (10,200,100,20), "Quit")){
    	Application.LoadLevel("GameOver");
    }
*/

    // Make a very long rect that is 20 pixels tall. 
    // This will make the window be resizable by the top
    // title bar - no matter how wide it gets.
    GUI.DragWindow (Rect (0,0, 10000, 200));
}
