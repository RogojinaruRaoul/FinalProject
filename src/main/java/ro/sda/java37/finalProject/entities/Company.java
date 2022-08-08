package ro.sda.java37.finalProject.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;
@Entity
@Data
public class Company {

    private int id;
    private String companyName;
    private String internetDomain;
    private String contactAddress;
    private String owner;
    private String logoType;

    @OneToMany
    private List<Branch> branches;

    @OneToMany
    private List<Customer> customer;


}