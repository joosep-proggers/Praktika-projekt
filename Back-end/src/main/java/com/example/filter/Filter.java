package com.example.filter;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Filter {
    private @Id @GeneratedValue Long id;
    private String name;
    private String value;

    Filter() {}

    Filter(String name, String value) {
        this.name = name;
        this.value = value;
    }

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getValue() {
        return this.value;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof Filter))
            return false;
        Filter filter = (Filter) o;
        return Objects.equals(this.id, filter.id) && Objects.equals(this.name, filter.name) && Objects.equals(this.value, filter.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.name, this.value);
    }

    @Override
    public String toString() {
        return "Filter{" + "id=" + this.id + ", name='" + this.name + '\'' + ", role='" + this.value + '\'' + '}';
    }
}
