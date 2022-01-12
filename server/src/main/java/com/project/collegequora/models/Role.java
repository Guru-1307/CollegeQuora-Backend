package com.project.collegequora.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@Data
@ToString

@Document(collection="Role")
public class Role {
    @Id
    private String role_id;
    private String role_name;
}
