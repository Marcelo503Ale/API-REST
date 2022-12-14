	package com.example.reservas.services.Implement;

	import java.util.List;
	import java.util.stream.Collectors;

	import org.slf4j.Logger;
	import org.slf4j.LoggerFactory;
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.http.HttpStatus;
	import org.springframework.stereotype.Service;
	import org.springframework.web.server.ResponseStatusException;

	import com.example.reservas.models.entities.Usuario;
	import com.example.reservas.models.dao.IUsuarioDAO;
	import com.example.reservas.services.interfaces.IUsuarioService;

	@Service
	public class UsuarioServiceImpl implements IUsuarioService {
		
		@Autowired
		private IUsuarioDAO repository;
		
		
		private static final Logger log = LoggerFactory.getLogger(IUsuarioService.class);


		@Override
		public List<Usuario> getAll() {
			return repository.findAll();
		}

		@Override
		public Usuario getById(Integer id) {
			return repository.findById(id).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "El usuario no existe") ); 
		}

		@Override
		public Usuario save(Usuario usuario) {
			Long isExist = repository.countByCorreo(usuario.getCorreo());
			
			if(isExist > 0) {
				throw new ResponseStatusException(HttpStatus.CONFLICT, "El usuario con correo: " + usuario.getCorreo() + " ya existe");
			}
			
			return repository.save(usuario);
		}

		@Override
		public Usuario update(Usuario usuario, Integer integer) {
			
			Usuario usuarioActual = getById(integer);
			
			usuario.setId(usuarioActual.getId());
			
			return repository.save(usuario);
			
		
			
		}

		@Override
		public void delete(Integer id) {
			Usuario usuarioDelete = getById(id);
			usuarioDelete.setEstado(false);
			repository.save(usuarioDelete);
			
		}
		
		
		@Override
		public Usuario getByCorreo(String correo) {
			Usuario usuario = repository.findByCorreo(correo);
			if(usuario == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "El usuario " + correo + " no existe");
			return usuario;
			
		}
		
		

	}
