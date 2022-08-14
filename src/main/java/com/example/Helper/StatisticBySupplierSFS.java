package com.example.Helper;

public class StatisticBySupplierSFS {
	public String name;
	public int count;
	public double moisture;
	public double foreignMatter;
	public double tw;
	public double amount;
	public double oil;
	
	
	
	public double getOil() {
		return oil;
	}
	public void setOil(double oil) {
		this.oil = oil;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getMoisture() {
		return moisture;
	}
	public void setMoisture(double moisture) {
		this.moisture = moisture;
	}
	public double getForeignMatter() {
		return foreignMatter;
	}
	public void setForeignMatter(double foreignMatter) {
		this.foreignMatter = foreignMatter;
	}
	public double getTw() {
		return tw;
	}
	public void setTw(double tw) {
		this.tw = tw;
	}
	public StatisticBySupplierSFS(String name, double moisture, double foreignMatter, double tw, int count, double amount, double oil) {
		super();
		this.name = name;
		this.moisture = moisture;
		this.foreignMatter = foreignMatter;
		this.tw = tw;
		this.count = count;
		this.amount = amount;
		this.oil = oil;
	}
	public StatisticBySupplierSFS() {
		super();
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}

}
