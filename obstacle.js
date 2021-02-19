class obstacle
{
private:
	int x,y,col;
public:
	obstacle():x(0),y(0),col(0)
	{}
	obstacle(int a,int b,int c):x(a),y(b),col(c)
	{}
	void get(int a,int b,int c)
	{
		x=a;
		y=b;
		col=c;
	}
	void draw()
	{
		setcolor(col);
		setfillstyle(1,col);
		circle(x,y,20);
		floodfill(x,y,col);
	}
};

