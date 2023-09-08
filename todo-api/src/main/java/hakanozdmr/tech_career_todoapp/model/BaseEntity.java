package hakanozdmr.tech_career_todoapp.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@MappedSuperclass
@Data
public abstract class BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime createdDate = LocalDateTime.now();
    @UpdateTimestamp
    private LocalDateTime updatedDate;
}
