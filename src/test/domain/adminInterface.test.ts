// admin.test.ts

import { Admin } from '../../domain/entity/AdminInterface'; // Ajusta la ruta según tu estructura de archivos


//Ensure that all properties of Admin interface are correctly set and can be accessed.
    // Ensure that all properties of Admin interface are correctly set and can be accessed.
    it('should correctly set and access all properties of Admin interface', () => {
      const admin: Admin = {
        isAdmin: true,
        id: '123',
        nombre: 'John',
        apellido: 'Doe',
        email: 'john.doe@example.com',
        password: 'password',
        roles: ['admin', 'user'],
        createdAt: new Date(),
        updatedAt: new Date(),
        empresas: ['Company A', 'Company B']
      };

      expect(admin.isAdmin).toBe(true);
      expect(admin.id).toBe('123');
      expect(admin.nombre).toBe('John');
      expect(admin.apellido).toBe('Doe');
      expect(admin.email).toBe('john.doe@example.com');
      expect(admin.password).toBe('password');
      expect(admin.roles).toEqual(['admin', 'user']);
      expect(admin.createdAt).toBeInstanceOf(Date);
      expect(admin.updatedAt).toBeInstanceOf(Date);
      expect(admin.empresas).toEqual(['Company A', 'Company B']);
    });

//Test with empty values for all properties.
    // Test with empty values for all properties.
    it('should handle empty values for all properties', () => {
      const admin: Admin = {
        isAdmin: false,
        id: '',
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        roles: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        empresas: []
      };

      expect(admin.isAdmin).toBe(false);
      expect(admin.id).toBe('');
      expect(admin.nombre).toBe('');
      expect(admin.apellido).toBe('');
      expect(admin.email).toBe('');
      expect(admin.password).toBe('');
      expect(admin.roles).toEqual([]);
      expect(admin.createdAt).toBeInstanceOf(Date);
      expect(admin.updatedAt).toBeInstanceOf(Date);
      expect(admin.empresas).toEqual([]);
    });

  //Ensure that the isAdmin property is a boolean value.
      // Ensure that the isAdmin property is a boolean value.
      it('should correctly set and access the isAdmin property of Admin interface', () => {
        const admin: Admin = {
          isAdmin: true,
          id: '123',
          nombre: 'John',
          apellido: 'Doe',
          email: 'john.doe@example.com',
          password: 'password',
          roles: ['admin', 'user'],
          createdAt: new Date(),
          updatedAt: new Date(),
          empresas: ['Company A', 'Company B']
        };
  
        expect(admin.isAdmin).toBe(true);
      });

      
      //Ensure that the roles property is an array of strings.
          // Ensure that the roles property is an array of strings.
    it('should correctly set and access the roles property of Admin interface', () => {
      const admin: Admin = {
        isAdmin: true,
        id: '123',
        nombre: 'John',
        apellido: 'Doe',
        email: 'john.doe@example.com',
        password: 'password',
        roles: ['admin', 'user'],
        createdAt: new Date(),
        updatedAt: new Date(),
        empresas: ['Company A', 'Company B']
      };

      expect(admin.roles).toEqual(['admin', 'user']);
    });

// Ensure that the empresas property is an array of strings.
    // Ensure that the empresas property is an array of strings.
    it('should correctly set and access the empresas property of Admin interface', () => {
      const admin: Admin = {
        isAdmin: true,
        id: '123',
        nombre: 'John',
        apellido: 'Doe',
        email: 'john.doe@example.com',
        password: 'password',
        roles: ['admin', 'user'],
        createdAt: new Date(),
        updatedAt: new Date(),
        empresas: ['Company A', 'Company B']
      };

      expect(admin.empresas).toEqual(['Company A', 'Company B']);
    });

    


