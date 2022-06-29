package pweb.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pweb.backend.model.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
}
