import processing.serial.*;
import java.awt.Toolkit;

Serial myPort;
String inString;
int pixel_w;
int xPos = 0;
float num = 0;
float[] numbers;
int dotted = 10;

Button trigger = new Button(0, 0, 150, 50, 7, "Blink");
Button threshUp = new Button(160, 0, 150, 50, 7, "Thresh Up");
Button threshDown = new Button(320, 0, 150, 50, 7, "Thresh Down");
Button trigger_beep = new Button(0, 55, 150, 50, 7, "Beep");

int rxnTime = 0;
int rxnNum = 0;
int rxnCount = 0;
int threshold = 80;
float graphThresh;

void setup()
{
  fullScreen();
  background(0);
  
  pixel_w = width;
  numbers = new float[pixel_w];
  
  //initialize data array to 0
  for(int i=0; i<pixel_w; i++)
  {
    numbers[i] = 0;
  }

  myPort = new Serial(this, Serial.list()[0], 9600);
  myPort.bufferUntil('\n');
  graphThresh = height/2 - map(threshold, 0, 1024, 0, height);
}

void draw()
{
    background(0);
    stroke(127, 34, 255);
    int base_level = (height/2);
    
    for(int i=0; i<pixel_w; i++)
    {
       line(i, base_level, i, base_level - numbers[i]);
    }
    
    drawDotted(graphThresh);
    
    text("Reaction Time: " + (rxnTime/1000.0) + " seconds" , 10, 150);
    trigger.drawButton();
    threshUp.drawButton();
    threshDown.drawButton();
    trigger_beep.drawButton();
}

void serialEvent(Serial p)
{
  inString = p.readStringUntil('\n');
  if(inString!=null)
  {
    inString = trim(inString);
    num = float(inString);
    num -= 900.0;
    
    if(num > threshold && num!=400 && rxnCount == 1)
    {
      rxnTime = millis() - rxnNum;
      rxnCount = 0;
    }
    
    num = map(num, 0, 1024, 0, height);
    numbers[xPos] = num;
    
    if(xPos >= (width-1))
    {
      xPos = 0;
      for(int i=0; i<width; i++)
      {
         numbers[i] = 0;
      }
      background(0);      
    }
    else{ xPos++;}
  }
}

void mouseClicked()
{
  if((mouseX >= trigger.x) && (mouseX <= trigger.x + trigger.w) &&
    (mouseY >= trigger.y) && (mouseY <= trigger.y + trigger.h))
  {
    rxnCount = 1;
    rxnTime = 0;
    myPort.write(2);
    rxnNum = millis();
  }
  else if((mouseX >= threshUp.x) && (mouseX <= threshUp.x + threshUp.w) &&
    (mouseY >= threshUp.y) && (mouseY <= threshUp.y + threshUp.h))
    {
      threshold += 2.0; //<>//
      graphThresh -= map(2.0, 0, 1024, 0, height);
    }
  else if((mouseX >= threshDown.x) && (mouseX <= threshDown.x + threshDown.w) &&
    (mouseY >= threshDown.y) && (mouseY <= threshDown.y + threshDown.h))
    {
      threshold -= 2.0; //<>//
      graphThresh += map(2.0, 0, 1024, 0, height);
    }
  else if((mouseX >= trigger_beep.x) && (mouseX <= trigger_beep.x + trigger_beep.w) &&
    (mouseY >= trigger_beep.y) && (mouseY <= trigger_beep.y + trigger_beep.h))
  {
    java.awt.Toolkit.getDefaultToolkit().beep();
    rxnCount = 1;
    rxnTime = 0;
    myPort.write(3);
    rxnNum = millis();
  }
    
}


class Button{
  
  //private variables
  float x, y, w, h, r;
  color fillColor;
  String text;
  
  //constructor
  Button (float x_pos, float y_pos, float wide, float high, float radii, String t)
  {
    x = x_pos;
    y = y_pos;
    w = wide;
    h = high;
    r = radii;
    fillColor = 162;
    text = t;
  }
  
  //functions:
  
  //void drawButton(): draws the rectangle associated with the button
  void drawButton()
  {
    noFill();
    rect(x, y, w, h, r);
    
    textSize(20);
    int x_offset = (150 - text.length()*11)/2;
    text(text, x+x_offset, y+30);
  }
  
  //void update(): updates the fillColor variable if mouse is over the button
  void update()
  {
    if((mouseX >= x) && (mouseX <= x + w) &&
    (mouseY >= y) && (mouseX <= y + h))
      fillColor = 209;
    else
      fillColor = 162;
  }
  
}

void drawDotted(float y)
{
  int xPos = 0;
  while(xPos < width)
  {
    stroke(255, 0, 0);
    line(xPos, y, xPos+dotted, y);
    xPos+=2*dotted;
  }
}



  