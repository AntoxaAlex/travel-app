import { ModalService } from './modal.service';

describe('ModalService',() => {
  let service: ModalService;
  const data = 'Flight Data'

  beforeEach(() => {
    service = new ModalService();
  })

  it('should exist', () => {
    expect(service).toBeTruthy();
  });

  it('should open modal', () => {
    service.openModal(data)
    expect(service.isModalOpened).toBe(true);
    expect(service.modalData).toBe('Flight Data')
  });

  it('should close modal', () => {
    service.closeModal()
    expect(service.isModalOpened).toBe(false);
    expect(service.modalData).toBe(null)
  });
})
