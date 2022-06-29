package pweb.backend.model;

import java.time.Instant;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;

@Entity
@Table(name="clients")
public class Client {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "cnpj")
	private String cnpj;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "date")
	@CreatedDate
	private Instant createdDate;
	
	public Client() {
		
	}
	
	public Client(Long id, String cnpj, String address, Instant CreatedDate, String name, Instant createdDate) {
		super();
		this.id = id;
		this.name = name;
		this.cnpj = cnpj;
		this.address = address;
		this.createdDate = createdDate;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setCreatedDate(Instant createdDate) {
		this.createdDate = createdDate;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Instant getCreatedDate() {
		return createdDate;
	}
}
