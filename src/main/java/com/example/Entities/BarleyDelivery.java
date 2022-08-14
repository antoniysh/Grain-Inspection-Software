package com.example.Entities;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class BarleyDelivery {
	//----------FIELDS------------
		@Id
		@GeneratedValue (strategy = GenerationType.IDENTITY)
		private Long id;
		
		@Column(name = "date_arrived")
		@JsonFormat(pattern ="dd/MM/yyyy")
		private Date arrived;
		
		@Column(name = "license_plate", nullable = false , columnDefinition = "VARCHAR(8)")
		private String licensePlate;
		
		@Column(name = "waybill_number", nullable = false, columnDefinition = "VARCHAR(10)")
		private String waybillNumber;
		
		@Column(name = " waybill_quantity", nullable = false)
		private int waybillQuantity;
		
		@Column(name = "order_id", nullable = false, columnDefinition = "VARCHAR(8)")
		private String orderId;
		
		@Column(name = "Supplier", nullable = false)
		private String supplier;
		

		@Column(name = "intake_place", nullable = false)
		private String intakePlace;
		
		@Column(name = "accepted",nullable = false)
		private boolean accepted;
		
		@Column(name = "MOISTURE", columnDefinition = "double CHECK (MOISTURE < 1)")
		private double moisture;
		
		@Column(name = "foreign_matter", columnDefinition = "double CHECK (foreign_matter < 1)")
		private double foreignMatter;
		
		@Column(name = "TW", columnDefinition = "double CHECK (TW < 100)")
		private double TW;
		
		@Column(name = "insects_per_kilo",nullable = false)
		private int insectsPerKilo;
		
		@Column(name = "net_scale_quantity")
		private Integer NetScaleQuantity;
		
		@Column(name = "remarks")
		private String remarks;
		
		//--------------- CONSTRUCTORS ---------------

		public BarleyDelivery(Long id, Date arrived, String licensePlate, String waybillNumber, int waybillQuantity,
				String orderId, String supplier, String intakePlace, boolean accepted, double moisture,
				double foreignMatter, double tW, int insectsPerKilo, Integer netScaleQuantity, String remarks) {
			super();
			this.id = id;
			this.arrived = arrived;
			this.licensePlate = licensePlate;
			this.waybillNumber = waybillNumber;
			this.waybillQuantity = waybillQuantity;
			this.orderId = orderId;
			this.supplier = supplier;
			this.intakePlace = intakePlace;
			this.accepted = accepted;
			this.moisture = moisture;
			this.foreignMatter = foreignMatter;
			TW = tW;
			this.insectsPerKilo = insectsPerKilo;
			NetScaleQuantity = netScaleQuantity;
			this.remarks = remarks;
		}
		
		

		
		public BarleyDelivery() {
			super();
		}
		
		//------------------GET & SET-----------------------
		
		public Long getId() {
			return id;
		}




		public void setId(Long id) {
			this.id = id;
		}




		public Date getArrived() {
			return arrived;
		}




		public void setArrived(Date arrived) {
			this.arrived = arrived;
		}




		public String getLicensePlate() {
			return licensePlate;
		}




		public void setLicensePlate(String licensePlate) {
			this.licensePlate = licensePlate;
		}




		public String getWaybillNumber() {
			return waybillNumber;
		}




		public void setWaybillNumber(String waybillNumber) {
			this.waybillNumber = waybillNumber;
		}




		public int getWaybillQuantity() {
			return waybillQuantity;
		}




		public void setWaybillQuantity(int waybillQuantity) {
			this.waybillQuantity = waybillQuantity;
		}




		public String getOrderId() {
			return orderId;
		}




		public void setOrderId(String orderId) {
			this.orderId = orderId;
		}




		public String getSupplier() {
			return supplier;
		}




		public void setSupplier(String supplier) {
			this.supplier = supplier;
		}




		public String getIntakePlace() {
			return intakePlace;
		}




		public void setIntakePlace(String intakePlace) {
			this.intakePlace = intakePlace;
		}




		public boolean isAccepted() {
			return accepted;
		}




		public void setAccepted(boolean accepted) {
			this.accepted = accepted;
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




		public double getTW() {
			return TW;
		}




		public void setTW(double tW) {
			TW = tW;
		}




		public int getInsectsPerKilo() {
			return insectsPerKilo;
		}




		public void setInsectsPerKilo(int insectsPerKilo) {
			this.insectsPerKilo = insectsPerKilo;
		}




		public Integer getNetScaleQuantity() {
			return NetScaleQuantity;
		}




		public void setNetScaleQuantity(Integer netScaleQuantity) {
			NetScaleQuantity = netScaleQuantity;
		}




		public String getRemarks() {
			return remarks;
		}




		public void setRemarks(String remarks) {
			this.remarks = remarks;
		}		
		

}
