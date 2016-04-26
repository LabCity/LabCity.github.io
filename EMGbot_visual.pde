import processing.serial.*;

final float threshold = 150;
float threshMap = map(threshold, 0, 250, 0, height/3);

Serial myPort;
String inString = null;
boolean first = true;

float sigF = 0;
float sigR = 0;
float sigL= 0;
float sigRe = 0;

float[] forward;
float[] right;
float[] left;
float[] reverse;

int xPos = 0;
int dotted = 10;

void setup()
{
  fullScreen();
  background(0);
  
  //dynamically allocate array
  forward = new float[int(width/3)];
  right = new float[int(width/3)];
  left = new float[int(width/3)];
  reverse = new float[int(width/3)];
  
  //initialiaze all arrays
  for(int i=0; i<(int(width/3)); i++)
  {
    forward[i] = 0;
    right[i] = 0;
    left[i] = 0;
    reverse[i] = 0;
  }
  
  myPort = new Serial(this, Serial.list()[0], 9600);
  myPort.bufferUntil('\n');
}

void draw()
{
  background(0);
  
  stroke(127,34,255);
  for(int i=0; i<(int(width/3)); i++)
    line(i+width/3, height/3, i+width/3, height/3 - forward[i]);
    
  for(int i=0; i<(int(width/3)); i++)
    line(i+(width*2/3), (height*2/3), i+(width*2/3), (height*2/3) - right[i]);
    
  for(int i=0; i<(int(width/3)); i++)
    line(i+width/3, height-1, i+width/3, height-1 - reverse[i]);
    
  for(int i=0; i<(int(width/3)); i++)
    line(i, (height*2/3), i, (height*2/3) - left[i]);
  
  //drawDotted(width/3, height/3 - threshMap, width/3);
  textSize(20);
  text("Forward", width/2 - 10, (height/3) + 20);
  text("Right", width*2/3 + width/6, height*2/3 + 20);
  text("Reverse", width/2 - 10, (height*2/3));
  text("Left", width/6, height*2/3 + 20);
  if(xPos > 0)
  {
    text("Voltage: " + map(forward[xPos-1], 0, height/3, 930, 1024) + "V", width/2 - 10, (height/3)+40);
    text("Voltage: " + map(right[xPos-1], 0, height/3, 930, 1024) + "V", width*2/3 + width/6, (height*2/3)+40);
    text("Voltage: " + map(reverse[xPos-1], 0, height/3, 930, 1024) + "V", width/2 - 10, (height*2/3)-20);
    text("Voltage: " + map(left[xPos-1], 0, height/3, 930, 1024) + "V", width/6, height*2/3 + 40);
  }
}

void serialEvent(Serial p)
{
  inString = p.readStringUntil('\n');
  float[] nums = float(split(inString, ','));
  
  if(inString!=null && !first && nums.length == 4)
  {    
    //assign appropriate variables
    for(int i=0; i<4; i++)
    {
      nums[i] = map(nums[i], 930, 1024, 0, height/3);
    }
    
    forward[xPos] = nums[0];
    //text("Voltage: " + forward[xPos]*(5.0/1024.0) + "V", width/2 - 10, (height/3)+40);

    right[xPos] = nums[1];
    //text("Voltage: " + right[xPos]*(5.0/1024.0) + "V", width*2/3 + width/6, (height*2/3)+40);
    
    reverse[xPos] = nums[2];
    //text("Voltage: " + reverse[xPos]*(5.0/1024.0) + "V", width/2 - 10, (height*2/3)-20);
    
    left[xPos] = nums[3];
    //text("Voltage: " + forward[xPos]*(5.0/1024.0) + "V", width/6, height*2/3 + 40);
  }
  else if(inString!= null && first)
    first = !first;
  
  if(xPos >= (width/3)-1)
  {
    xPos = 0;
    for(int i=0; i<(int(width/3)); i++)
    {
      forward[i] = 0;
      right[i] = 0;
      left[i] = 0;
      reverse[i] = 0;
    }
  }
  else
    xPos++;
    
}