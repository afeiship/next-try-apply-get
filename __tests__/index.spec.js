(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.tryApplyGet target is funciton without args', function () {
      var target = () => {
        return { name: 'fei' };
      };
      expect(nx.tryApplyGet(target)).toEqual({ name: 'fei' });
    });

    test('nx.tryApplyGet target is funciton with args', function () {
      var target = (data) => {
        return { name: 'fei', ...data };
      };

      expect(nx.tryApplyGet(target, [{ github: 'afeiship', hobby: 'coding' }])).toEqual({
        name: 'fei',
        github: 'afeiship',
        hobby: 'coding'
      });
    });

    test('target is null/string/object/array & other values', () => {
      var target1 = null;
      var target2 = 'abc';
      var target3 = { name: 'afei' };
      expect(nx.tryApplyGet(target1)).toEqual(null);
      expect(nx.tryApplyGet(target2)).toEqual('abc');
      expect(nx.tryApplyGet(target3)).toEqual({ name: 'afei' });
    });
  });
})();
