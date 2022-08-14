package com.example.Helper;

public class StatisticBySupplier {
	
	public String name;
	public int count;
	public double moisture;
	public double foreignMatter;
	public double tw;
	public double protein;
	public double gluten;
	public double amount;
	
	
	
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
	public double getProtein() {
		return protein;
	}
	public void setProtein(double protein) {
		this.protein = protein;
	}
	public double getGluten() {
		return gluten;
	}
	public void setGluten(double gluten) {
		this.gluten = gluten;
	}
	public StatisticBySupplier(String name, double moisture, double foreignMatter, double tw, double protein,
			double gluten, int count, double amount) {
		super();
		this.name = name;
		this.moisture = moisture;
		this.foreignMatter = foreignMatter;
		this.tw = tw;
		this.protein = protein;
		this.gluten = gluten;
		this.count = count;
		this.amount = amount;
	}
	public StatisticBySupplier() {
		super();
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}

}
