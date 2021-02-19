class timer
{
private:
	int sec,min,ms,flag;
public:
	timer():min(0),sec(0),ms(0),flag(0)
	{}
	timer(int a,int b,int c,int d):min(a),sec(b),ms(c),flag(d)
	{}
	void start()
	{
		min=sec=ms=flag=0;
	}
	void get()
	{
		settextstyle(1,0,1);
		char* minn;
		if (min>9)
		{
			int minnn=min/10;
			if (minnn==0)
				minn="0";
			if (minnn==1)
				minn="1";
			if (minnn==2)
				minn="2";
			if (minnn==3)
				minn="3";
			if (minnn==4)
				minn="4";
			if (minnn==5)
				minn="5";
			if (minnn==6)
				minn="6";
			if (minnn==7)
				minn="7";
			if (minnn==8)
				minn="8";
			if (minnn==9)
				minn="9";
			setcolor(15);
			outtextxy(20,100,minn);
			setcolor(0);
			outtextxy(20,100,minn);
		}
		if (min>9)
		{
			int minnn=min%10;
			if (minnn==0)
				minn="0";
			if (minnn==1)
				minn="1";
			if (minnn==2)
				minn="2";
			if (minnn==3)
				minn="3";
			if (minnn==4)
				minn="4";
			if (minnn==5)
				minn="5";
			if (minnn==6)
				minn="6";
			if (minnn==7)
				minn="7";
			if (minnn==8)
				minn="8";
			if (minnn==9)
				minn="9";
			setcolor(15);
			outtextxy(30,100,minn);
			setcolor(0);
			outtextxy(30,100,minn);
		}
		if (min<=9)
		{
			int minnn=min;
			if (minnn==0)
				minn="0";
			if (minnn==1)
				minn="1";
			if (minnn==2)
				minn="2";
			if (minnn==3)
				minn="3";
			if (minnn==4)
				minn="4";
			if (minnn==5)
				minn="5";
			if (minnn==6)
				minn="6";
			if (minnn==7)
				minn="7";
			if (minnn==8)
				minn="8";
			if (minnn==9)
				minn="9";
			setcolor(15);
			outtextxy(20,100,minn);
			setcolor(0);
			outtextxy(20,100,minn);
		}
		setcolor(15);
		outtextxy(40,100,":");
		if (sec>9)
		{
			int minnn=sec/10;
			if (minnn==0)
				minn="0";
			if (minnn==1)
				minn="1";
			if (minnn==2)
				minn="2";
			if (minnn==3)
				minn="3";
			if (minnn==4)
				minn="4";
			if (minnn==5)
				minn="5";
			if (minnn==6)
				minn="6";
			if (minnn==7)
				minn="7";
			if (minnn==8)
				minn="8";
			if (minnn==9)
				minn="9";
			setcolor(15);
			outtextxy(50,100,minn);
			setcolor(0);
			outtextxy(50,100,minn);
		}
		if (sec>9)
		{
			int minnn=sec%10;
			if (minnn==0)
				minn="0";
			if (minnn==1)
				minn="1";
			if (minnn==2)
				minn="2";
			if (minnn==3)
				minn="3";
			if (minnn==4)
				minn="4";
			if (minnn==5)
				minn="5";
			if (minnn==6)
				minn="6";
			if (minnn==7)
				minn="7";
			if (minnn==8)
				minn="8";
			if (minnn==9)
				minn="9";
			setcolor(15);
			outtextxy(60,100,minn);
			setcolor(0);
			outtextxy(60,100,minn);
		}
		if (sec<=9)
		{
			int minnn=sec;
			if (minnn==0)
				minn="0";
			if (minnn==1)
				minn="1";
			if (minnn==2)
				minn="2";
			if (minnn==3)
				minn="3";
			if (minnn==4)
				minn="4";
			if (minnn==5)
				minn="5";
			if (minnn==6)
				minn="6";
			if (minnn==7)
				minn="7";
			if (minnn==8)
				minn="8";
			if (minnn==9)
				minn="9";
			setcolor(15);
			outtextxy(50,100,minn);
			setcolor(0);
			outtextxy(50,100,minn);
		}
		setcolor(15);
		outtextxy(70,100,":");
		if (ms>9)
		{
			int minnn=ms/10;
			if (minnn==0)
				minn="0";
			if (minnn==1)
				minn="1";
			if (minnn==2)
				minn="2";
			if (minnn==3)
				minn="3";
			if (minnn==4)
				minn="4";
			if (minnn==5)
				minn="5";
			if (minnn==6)
				minn="6";
			if (minnn==7)
				minn="7";
			if (minnn==8)
				minn="8";
			if (minnn==9)
				minn="9";
			setcolor(15);
			outtextxy(80,100,minn);
			setcolor(0);
			outtextxy(80,100,minn);
		}
		if (ms>9)
		{
			int minnn=ms%10;
			if (minnn==0)
				minn="0";
			if (minnn==1)
				minn="1";
			if (minnn==2)
				minn="2";
			if (minnn==3)
				minn="3";
			if (minnn==4)
				minn="4";
			if (minnn==5)
				minn="5";
			if (minnn==6)
				minn="6";
			if (minnn==7)
				minn="7";
			if (minnn==8)
				minn="8";
			if (minnn==9)
				minn="9";
			setcolor(15);
			outtextxy(90,100,minn);
			setcolor(0);
			outtextxy(90,100,minn);
		}
		if (ms<=9)
		{
			int minnn=ms;
			if (minnn==0)
				minn="0";
			if (minnn==1)
				minn="1";
			if (minnn==2)
				minn="2";
			if (minnn==3)
				minn="3";
			if (minnn==4)
				minn="4";
			if (minnn==5)
				minn="5";
			if (minnn==6)
				minn="6";
			if (minnn==7)
				minn="7";
			if (minnn==8)
				minn="8";
			if (minnn==9)
				minn="9";
			setcolor(15);
			outtextxy(80,100,minn);
			setcolor(0);
			outtextxy(80,100,minn);
		}
	}
	void time()
	{
		ms++;
		if (ms==100)
		{
			ms=0;
			sec++;
		}
		if (sec==60)
		{
			sec=0;
			min++;
		}
	}
	int minutes()
	{
		return min;
	}
	void timego()
	{
		ms=0;
		sec+=30;
		if (sec>60)
		{
			sec=0;
			min++;
		}
	}
};