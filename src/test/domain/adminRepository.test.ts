import { Admin } from '../../domain/entity/AdminInterface'; // 
import { AdminRepository } from '../../domain/repository/AdminRepository'; // 

    // should be able to save an Admin object to the repository
    it('should save an Admin object to the repository', async () => {
        const adminRepository = new AdminRepository();
        const admin: Admin = {
          isAdmin: true,
          id: '1',
          nombre: 'John',
          apellido: 'Doe',
          email: 'john.doe@example.com',
          password: 'password',
          roles: ['admin'],
          createdAt: new Date(),
          updatedAt: new Date(),
          empresas: ['Company A']
        };
  
        await adminRepository.save(admin);
  
        const savedAdmin = await adminRepository.findById(admin.id);
        expect(savedAdmin).toEqual(admin);
      });